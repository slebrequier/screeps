var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');

module.exports.loop = function () {
    for (var name in Game.creeps) {
        var creep = Game.creeps[name];

        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }

        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}