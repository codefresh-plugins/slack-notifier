
const SimpleMode = require('./simple');
const TemplateMode = require('./template');



class Mode {

    static send(type){
        let mode = SimpleMode;
        if(type === "template"){
            mode = TemplateMode;
        }
        mode.send();
    }

}

module.exports = Mode;
