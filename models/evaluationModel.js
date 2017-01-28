"use strict"

var models = require(__dirname);

module.exports = function(sequelize, DataTypes){
	var Evaluation = sequelize.define("Evaluation", {
		 name : DataTypes.STRING, 
		 uuid : {type:DataTypes.UUID, defaultValue: DataTypes.UUIDV4}
	}, {
		classMethods: {
			createRecord: function(evaluation){            
            	return Evaluation.build(evaluation).save();
	        },
	        deleteRecord: function(evaluation){
	            return Evaluation.destroy({
	                  where:{
	                    uuid:evaluation.uuid
	                  }
	            });
	        },
	        updateRecord:function(evaluation){
	             return Evaluation.update(evaluation,{
	                  where:{
	                    uuid:evaluation.uuid
	                  }
	            });
	        },
	        listRecords:function(){
	            return Evaluation.findAll();
	        },        
	        listByStep: function(contest){
	            return Evaluation.findAll()
	        }
		},
		instanceMethod: {

		}
	});
	return Evaluation;
};