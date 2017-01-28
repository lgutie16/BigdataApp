"use strict"

var models = require(__dirname);

module.exports =  function(sequelize, DataTypes) {
	var Criterion = sequelize.define("Criterion", {
		name: DataTypes.STRING,
		description: DataTypes.TEXT,
		percentage: DataTypes.FLOAT,
		dataType: DataTypes.STRING,
		dataSize: DataTypes.INTEGER,
		mandatory: DataTypes.BOOLEAN,
		uuid : {type:DataTypes.UUID, defaultValue: DataTypes.UUIDV4}
	}, {
		classMethods: {
	        getById: function(id) {
	            return Criterion.findById(id);
	        },
	        createCriterion: function(criterion){	            
	            return Criterion.build(criterion).save();
	        },
	        updateRecord:function(criterion){
	             return Criterion.update(criterion,{
	                  where:{
	                    uuid:criterion.uuid
	                  }
	            });
	        },
	        deleteRecord: function(criterion){
	        	return Criterion.destroy({
				     where:{
	                    uuid:criterion.uuid
	                 }
				})
	        },
	        listRecords:function(){
	            return Criterion.findAll();
	        }

		},
		 instanceMethods:{
	        
	     }
	})
	return Criterion;
};