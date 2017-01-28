   "use strict";

var models  = require(__dirname);



module.exports = function(sequelize, DataTypes) {
var Contest = sequelize.define("Contest", {
    name: DataTypes.STRING,
<<<<<<< HEAD
    directedTo: DataTypes.TEXT,
    description:DataTypes.TEXT,
    start:DataTypes.DATE,
    end:DataTypes.DATE,
    startInscription: DataTypes.DATE,
    endInscriptions: DataTypes.DATE,
    awards: DataTypes.TEXT,
    inCharge: DataTypes.STRING,
=======
    description:DataTypes.STRING,
    start:DataTypes.DATE,
    end:DataTypes.DATE,
    awards: DataTypes.TEXT,
>>>>>>> d3489b4339726904bcf4c849df53a03ce81aa19e
    uuid : {type:DataTypes.UUID, defaultValue: DataTypes.UUIDV4}


}, {
    classMethods: {
        associate: function(models) {
            Contest.hasMany(models.Step);

        },
        getById: function(id) {
            return Contest.findById(id);
        },
<<<<<<< HEAD
        createRecord: function(contest){
            
            return Contest.build(contest).save();
        },
        updateRecord:function(contest){
=======
        crear: function(contest){
            
            return Contest.build(contest).save();
        },
        actualizar:function(contest){
>>>>>>> d3489b4339726904bcf4c849df53a03ce81aa19e
             return Contest.update(contest,{
                  where:{
                    uuid:Contest.uuid
                  }
                });
        },
<<<<<<< HEAD
        listRecords:function(){
=======
        listContests:function(){
>>>>>>> d3489b4339726904bcf4c849df53a03ce81aa19e
            return Contest.findAll();
        }



    },
    instanceMethods:{
<<<<<<< HEAD
        available:function(nuevaFechaInicio,nuevaFechaFin){
=======
        estaDisponible:function(nuevaFechaInicio,nuevaFechaFin){
>>>>>>> d3489b4339726904bcf4c849df53a03ce81aa19e
           
        },
    }


});

return Contest;
};