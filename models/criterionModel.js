"use strict"

var models = require(__dirname);

module.exports =  function(sequelize, DataTypes) {
	var Criterion = sequelize.define("Criterion", {
		name: DataTypes.STRING,
		description: DataTypes.TEXT,
		percentage: DataTypes.FLOAT,
<<<<<<< HEAD
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
=======
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
>>>>>>> d3489b4339726904bcf4c849df53a03ce81aa19e
	             return Criterion.update(criterion,{
	                  where:{
	                    uuid:criterion.uuid
	                  }
	            });
	        },
<<<<<<< HEAD
	        deleteRecord: function(criterion){
=======
	        deleteCriterion: function(criterion){
>>>>>>> d3489b4339726904bcf4c849df53a03ce81aa19e
	        	return Criterion.destroy({
				     where:{
	                    uuid:criterion.uuid
	                 }
				})
	        },
<<<<<<< HEAD
	        listRecords:function(){
=======
	        listCriterions:function(){
>>>>>>> d3489b4339726904bcf4c849df53a03ce81aa19e
	            return Criterion.findAll();
	        }

		},
		 instanceMethods:{
<<<<<<< HEAD
	        
=======
	        estaDisponible:function(nuevaFechaInicio,nuevaFechaFin){
	           
	        },
>>>>>>> d3489b4339726904bcf4c849df53a03ce81aa19e
	     }
	})
	return Criterion;
};