  "use strict";

var models  = require(__dirname);

module.exports = function(sequelize, DataTypes) {
        var Ideas = sequelize.define("Ideas", {
        infoItems: DataTypes.TEXT,
        grades: DataTypes.TEXT,
        position: DataTypes.STRING,
        uuid : {type:DataTypes.UUID, defaultValue: DataTypes.UUIDV4}
    }, {
    classMethods: {
        getById: function(id) {
            return Ideas.findById(id);
        },
        createRecord: function(idea){            
            return Ideas.build(idea).save();
        },
        deleteRecord: function(idea){
            return Ideas.destroy({
                  where:{
                    uuid:idea.uuid
                  }
            });
        },
        updateRecord:function(idea){
             return Ideas.update(idea,{
                  where:{
                    uuid:idea.uuid
                  }
            });
        },
        listRecords:function(){
            return Ideas.findAll();
        },        
        listByContest: function(contest){
            return Ideas.findAll()
        }
    },
    instanceMethods:{
        available:function(startDate,endDate){
           
        },
    }
});

return Ideas;
};