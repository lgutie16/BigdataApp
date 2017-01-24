"use strict"

var models = require(__dirname);

module.exports =  function(sequelize, DataTypes) {
	var Criterion = sequelize.define("Criterion", {
		name: DataTypes.STRING,
		description: DataTypes.TEXT,
		percentage: DataTypes.FLOAT,
		uuid : {type:DataTypes.UUID, defaultValue: DataTypes.UUIDV4}
	}, {
		classMethods: {
			ssociate: function(models) {
            Criterion.hasMany(models.Criterion);
	        },
	        getById: function(id) {
	            return Criterion.findById(id);
	        },
	        crear: function(criterion){	            
	            return Criterion.build(criterion).save();
	        },
	        actualizar:function(criterion){
	             return Criterion.update(criterion,{
	                  where:{
	                    uuid:criterion.uuid
	                  }
	            });
	        },
	        deleteCriterion: function(criterion){
	        	return Criterion.destroy({
				     where:{
	                    uuid:criterion.uuid
	                 }
				})
	        },
	        listCriterions:function(){
	            return Criterion.findAll();
	        }

		},
		 instanceMethods:{
	        estaDisponible:function(nuevaFechaInicio,nuevaFechaFin){
	           
	        },
	     }
	})
	return Criterion;
};