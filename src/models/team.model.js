const teams =(sequelize, type) =>{
    return sequelize.define('teams', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        squad: type.STRING, 
        boss: type.STRING,
        coach: type.STRING,
        foundation: type.STRING,

        createTeams:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateTeams:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = teams