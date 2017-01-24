  "use strict";

var models  = require(__dirname);

module.exports = function(sequelize, DataTypes) {
var Step = sequelize.define("Step", {
    name: DataTypes.STRING,
    description:DataTypes.TEXT,
    start:DataTypes.DATE,
    end:DataTypes.DATE,    
    awards: DataTypes.TEXT,
    uuid : {type:DataTypes.UUID, defaultValue: DataTypes.UUIDV4}
}, {
    classMethods: {
        associate: function(models) {
            Step.hasMany(models.Criterion);
        },
        getById: function(id) {
            return Step.findById(id);
        },
        createRecord: function(step){            
            return Step.build(step).save();
        },
        deleteRecord: function(step){
            return Step.destroy({
                  where:{
                    uuid:step.uuid
                  }
            });
        },
        updateRecord:function(step){
             return Step.update(step,{
                  where:{
                    uuid:step.uuid
                  }
            });
        },
        listRecords:function(){
            return Step.findAll();
        },        
        listByContest: function(contest){
            return Step.findAll()
        }



    },
    instanceMethods:{
        available:function(startDate,endDate){
           
        },
    }
});

return Step;
};