import propertyTemplate from './PropertyTemplate'

import * as go from 'gojs';
const $ = go.GraphObject.make;

export default $(go.Link,  // the whole link panel
    $(go.Shape,  // the link shape
        {stroke: "black"}),
    $(go.Shape,  // the arrowhead
        {toArrow: "standard", stroke: null}),
    $(go.Panel, "Auto",
        $(go.Shape, "RoundedRectangle", {fill: "#fff6"}),
        $(go.Panel, "Table",
            {defaultRowSeparatorStroke: "black"},
            $(go.TextBlock,
                {
                    textAlign: "center",
                    font: "10pt helvetica, arial, sans-serif",
                    stroke: "#000",
                    margin: 4,
                    editable: true,
                },
                new go.Binding("text", "label").makeTwoWay()),
            $(go.Panel, "Vertical", {name: "PROPERTIES"},
                new go.Binding("itemArray", "properties"),
                {
                    row: 1,
                    margin: 3,
                    stretch: go.GraphObject.Fill,
                    defaultAlignment: go.Spot.Left,
                    itemTemplate: propertyTemplate
                }
            ),
        ),
        new go.Binding("visible", "", ({label}) => !!label),
    ),
    // ID
    $(go.TextBlock,
        {
            textAlign: "center",
            font: "10pt helvetica, arial, sans-serif",
            stroke: "#000",
            margin: 4
        },
        new go.Binding("text", "id"),
        {
            segmentIndex: 0,
            segmentOffset: new go.Point(NaN, NaN),
        }
    ),
)