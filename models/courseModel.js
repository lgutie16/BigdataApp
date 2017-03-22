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
            Course.hasMany(models.SchoolClass, {onDelete: 'cascade'});
        },
        getById: function(id) {
            return Course.findById(id);
        },
        createRecord: function(course){  
            var classes = course.classes;          
            return Course.build(course).save()
        },
        updateRecord:function(course){
             return Course.update(course,{
              where:{
                uuid:Course.uuid
              }
            });
        },
        listRecords:function(cb){
            setTimeout(function () { // simulated I/O
                cb(null, Course.findAll({
                  include: [
                    {model: sequelize.model('SchoolClass'),
                        include: [
                            {model: sequelize.model('Students')},                            
                        ]
                    }
                  ]
                }));
            }, 100);            
        },
        deleteRecord: function(uuid){
            return Course.destroy({
                  where:{
                    uuid: uuid
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