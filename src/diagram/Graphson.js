export default function toGraphson(diagram) {
    const nodes = diagram.model.nodeDataArray;
    const vertexes = nodes.map(node => {
        const [, label, id] = node.name.match(/(.+) \((\d+)\)/);
        const vertex = {
            id,
            label,
            properties: {},
        };
        node.properties.forEach(prop => {
            const [, key, value] = prop.name.match(/([^:]+): (.+)/);
            if (!(key in vertex.properties)) {
                vertex.properties[key] = [];
            }
            vertex.properties[key].push({value, id: prop.id});
        });

        return vertex;
    });

    const links = diagram.model.linkDataArray;
    links.forEach(link => {
        const edge = {
            id: link.id,
            inV: link.to,
            outV: link.from,
            properties: {},
        };
        link.properties.forEach(p => {
            const [, key, value] = p.name.match(/([^:]+): (.+)/);
            edge.properties[key] = value;
        });

        const outV = vertexes.find(v => _idEqual(v.id, link.from));
        outV.outE = outV.outE || {};
        if (!(link.label in outV.outE)) {
            outV.outE[link.label] = [];
        }
        outV.outE[link.label].push(edge);

        const inV = vertexes.find(v => _idEqual(v.id, link.to));
        inV.inE = inV.inE || {};
        if (!(link.label in inV.inE)) {
            inV.inE[link.label] = [];
        }
        inV.inE[link.label].push(edge);
    });

    // Postprocessing to convert to node-per-line.
    // return vertexes.map(v => JSON.stringify(v)).join('\n');

    return JSON.stringify(vertexes);
}

const _idEqual = (a, b) => `${a}` === `${b}`;
