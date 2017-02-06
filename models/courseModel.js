"use strict";

var models  = require(__dirname);

module.exports = function(sequelize, DataTypes) {
var Course = sequelize.define("Course", {
    name: DataTypes.STRING,
    description:DataTypes.TEXT,
    start:DataTypes.DATE,
    end:DataTypes.DATE,
    uuid : {type:DataTypes.UUID, defaultValue: DataTypes.UUIDV4}
}, {
    classMethods: {
        associate: function(models) {
            Course.hasMany(models.SchoolClass);
        },
        getById: function(id) {
            return Course.findById(id);
        },
        createRecord: function(course){            
            return Course.build(course).save();
        },
        updateRecord:function(course){
             return Course.update(course,{
                  where:{
                    uuid:Course.uuid
                  }
                });
        },
        listRecords:function(){
            return Course.findAll();
        },
        deleteRecord: function(course){
            console.log(course)
            return Course.destroy({
                  where:{
                    uuid:course.id
                  }
            });
        },
    },
    instanceMethods:{
        available:function(newstart,newend){           
        },
    }


});

return Course;
};