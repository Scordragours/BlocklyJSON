
/**
 * class containing the values of a block.
 */
class Block{
    constructor(){
        this._pId = "";
        this._val = "";
        this._id = "";
        this._nId = "";
    }
}

/***
 * Returns the list of all indexes corresponding to the ruler.
 *
 * @param {number}  id
 * @param {Block[]} blocks
 * @return {string}
 */
let getAllIndex = (id, blocks) => {
    let indexes = [];
    blocks.forEach((value, index, array) => {
        if(value._pId === id){
            indexes.push(index);
        }
    });
    return indexes;
};

/***
 *
 * @param {Block} block
 * @param {boolean} isEnd
 * @param {Block[]} blocks
 * @returns {string}
 */
let ShowKeyValues = (block, isEnd, blocks) => {
    let childs = getAllIndex(block._id, blocks);
    let Text = "";
    if((childs.length === 0)&&(blocks.findIndex(element => element._id === block._id) !== 0)){
        Text += "\""+ block._val +"\"";
    }else{
        Text += "{";
        Text += "\""+ block._val +"\": [";
        childs.forEach((value, index, array) => {
            Text += ShowKeyValues(blocks[value], (childs.length - 1 === index) ? true : false, blocks);
        });
        Text += "]"
        Text += "}";
    }
    if(!isEnd){
        Text += ",";
    }
    return Text;
};

// Declares the workspace to display blockly.
let workSpace = Blockly.inject('Blocky', {
    toolbox: document.getElementById("Toolbox")
});

// Makes the callback in case of a change.
workSpace.addChangeListener((event) => {
    /*
    * Récuperation du type de bloque lorque un bloque est à la racine du workspace.
    * */
    /*if(event.type === Blockly.Events.MOVE){
        if(workSpace.getTopBlocks().length !== 0){
            workSpace.getTopBlocks().forEach((value, index, array) => {
                if((value.type !== "triple_equal") || (index !== 0)){
                    workSpace.removeBlockById(value.id);
                    document.getElementById().remove();
                }
            });
        }
    }*/
    let blocks = [];

    workSpace.getTopBlocks().forEach((value, index, array) => {
        // Recovers blockages in the workspace, and transforms them into Block.
        workSpace.getAllBlocks().forEach((value, index, array) => {
            let blockTemps = new Block();
            blockTemps._pId = (value.parentBlock_ != null) ? value.parentBlock_.id : "null";
            blockTemps._id = value.id;
            blockTemps._val = value.inputList[0].fieldRow[0].value_;
            blockTemps._nId = ((value.nextConnection != null)&&(value.nextConnection.targetConnection != null)) ? value.nextConnection.targetConnection.sourceBlock_.id : "null";
            blocks.push(blockTemps);
        });

        // Modify the parent blocks in certain blocks that are wrong.
        blocks.forEach((value, index, array) => {
            if(value._nId !== "null"){
                let tmp = blocks.findIndex(element => (element._id === value._nId));
                blocks[tmp]._pId = value._pId;
            }
        });

        // Create the text to display.
        let Data = ShowKeyValues(blocks[0], true, blocks);

        // Creates the link with the json file.
        let baliseA = document.getElementById("JsonDownload");
        document.getElementById("JSON").innerText = Data;
        baliseA.href = window.URL.createObjectURL(new Blob([Data], {type: "application/json"}));
    });
});