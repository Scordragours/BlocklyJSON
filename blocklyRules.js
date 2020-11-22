// Creates initialization blocks.
Blockly.Blocks['triple_equal'] = {
    init: function(){
        this.appendStatementInput('===')
            .appendField('===');
    }
};

// Creates function blocks.
Blockly.Blocks['function'] = {
    init: function(){
        this.setNextStatement(true);
        this.setPreviousStatement(true);

        this.appendDummyInput()
            .appendField(
                new Blockly.FieldTextInput('Nom variable'),
                'var'
            );

        this.appendStatementInput('Values')
            .appendField('valeurs');
    }
};

// Creates the arguments in the function.
Blockly.Blocks['arguments'] = {
    init: function(){
        this.setNextStatement(true);
        this.setPreviousStatement(true);

        this.appendDummyInput()
            .appendField(
                new Blockly.FieldTextInput('Arguments'),
                'arguments'
            );
    }
};