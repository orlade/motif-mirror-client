import toGraphson from './Graphson'

/** Invoked when a change is made to the graph model. */
export default function handleModelChange(path, changes, socket) {
    console.log('Model change:', this, arguments);

    if (changes.insertedNodeKeys) {
        console.log('Inserted node', changes.insertedNodeKeys[0]);
    }

    if (changes.insertedLinkKeys) {
        console.log('Inserted link', changes.insertedLinkKeys[0]);
    }

    if (changes.modifiedNodeData) {
        console.log('Modified node', changes.modifiedNodeData[0]);
    }

    if (changes.modifiedLinkData) {
        console.log('Modified link', changes.modifiedLinkData[0]);
    }

    const json = toGraphson(this);

    _save(path, json, socket);
}

const hashCode = string => {
    let hash = 0, i, chr;
    for (i = 0; i < string.length; i++) {
        chr = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

const _save = (path, content, socket) => {
    if (!socket) throw new Error('Not connected');

    const hash = hashCode(content);
    console.debug(`« Saving file ${path} (#${hash})...`);
    socket.emit('save', {path, content});
}
