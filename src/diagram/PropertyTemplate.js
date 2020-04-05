import * as go from 'gojs';
const $ = go.GraphObject.make;

// show visibility or access as a single character at the beginning of each property or method
const convertVisibility = visibility => {
    switch (visibility) {
        case "public":
            return "+";
        case "private":
            return "-";
        case "protected":
            return "#";
        case "package":
            return "~";
        default:
            return visibility;
    }
}

export default $(go.Panel, "Horizontal",
    // property visibility/access
    $(go.TextBlock,
        {isMultiline: false, editable: false, width: 12},
        new go.Binding("text", "visibility", convertVisibility)),
    // property name, underlined if scope=="class" to indicate static property
    $(go.TextBlock,
        {isMultiline: false, editable: true},
        new go.Binding("text", "name").makeTwoWay(),
        new go.Binding("isUnderline", "scope", function(s) {
            return s[0] === 'c'
        })),
    // property type, if known
    $(go.TextBlock, "",
        new go.Binding("text", "type", function(t) {
            return (t ? ": " : "");
        })),
    $(go.TextBlock,
        {isMultiline: false, editable: true},
        new go.Binding("text", "type").makeTwoWay()),
    // property default value, if any
    $(go.TextBlock,
        {isMultiline: false, editable: false},
        new go.Binding("text", "default", function(s) {
            return s ? " = " + s : "";
        }))
)
