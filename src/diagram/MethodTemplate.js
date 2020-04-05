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
    // method visibility/access
    $(go.TextBlock,
        {isMultiline: false, editable: false, width: 12},
        new go.Binding("text", "visibility", convertVisibility)),
    // method name, underlined if scope=="class" to indicate static method
    $(go.TextBlock,
        {isMultiline: false, editable: true},
        new go.Binding("text", "name").makeTwoWay(),
        new go.Binding("isUnderline", "scope", function(s) {
            return s[0] === 'c'
        })),
    // method parameters
    $(go.TextBlock, "()",
        // this does not permit adding/editing/removing of parameters via inplace edits
        new go.Binding("text", "parameters", function(parr) {
            var s = "(";
            for (var i = 0; i < parr.length; i++) {
                var param = parr[i];
                if (i > 0) s += ", ";
                s += param.name + ": " + param.type;
            }
            return s + ")";
        })),
    // method return type, if any
    $(go.TextBlock, "",
        new go.Binding("text", "type", function(t) {
            return (t ? ": " : "");
        })),
    $(go.TextBlock,
        {isMultiline: false, editable: true},
        new go.Binding("text", "type").makeTwoWay())
)
