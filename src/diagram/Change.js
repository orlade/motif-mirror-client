/** Invoked when a change is made to the graph model. */
function handleModelChange(changes) {
    console.log('Model change:', changes);

    // TODO: Convert from change event to changes.
    // if (!evt.isTransactionFinished || !evt.object) return;
    // let shouldSave = false;
    // const txn = evt.object;
    // txn.changes.each(e => {
    //     if (e.change === go.ChangedEvent.Insert) {
    //         console.log(evt.propertyName + " added node with key: " + e.newValue.key);
    //         shouldSave = true;
    //     } else if (e.change === go.ChangedEvent.Remove) {
    //         console.log(evt.propertyName + " removed node with key: " + e.oldValue.key);
    //         shouldSave = true;
    //     } else if (e.change === go.ChangedEvent.Property && e.model) {
    //         console.log(`Changed property ${e.propertyName} on ${e.object} from ${e.oldValue} to ${e.newValue}`, e);
    //         shouldSave = true;
    //     }
    // });
    // if (shouldSave) {
    //     // this.network.saveCurrent(toGraphson(diagram));
    // }
}
