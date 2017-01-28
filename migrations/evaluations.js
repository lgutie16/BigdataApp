"use strict"

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable(
			  'EvaluationsTest',
			  {
			    id: {
			      type: Sequelize.INTEGER,
			      primaryKey: true,
			      autoIncrement: true
			    },
			    createdAt: {
			      type: Sequelize.DATE
			    },
			    updatedAt: {
			      type: Sequelize.DATE
			    },
			    attr1: Sequelize.STRING,
			    attr2: Sequelize.INTEGER,
			    attr3: {
			      type: Sequelize.BOOLEAN,
			      defaultValue: false,
			      allowNull: false
			    },
			    //foreign key usage
			    attr4: {
			        type: Sequelize.INTEGER,
			        references: {
			            model: 'another_table_name',
			            key: 'id'
			        },
			        onUpdate: 'cascade',
			        onDelete: 'cascade'
			    }
			  },
			  {
			    engine: 'MYISAM',                     // default: 'InnoDB'
			    charset: 'latin1',                    // default: null
			    schema: 'public'                      // default: public, PostgreSQL only.
			  }
			)
  },
 
  down: function(queryInterface, Sequelize) {
    // logic for reverting the changes
  }
}