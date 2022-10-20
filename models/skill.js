const skills = [
    {id: 125223, skill: 'HTML/CSS', done: true},
    {id: 127904, skill: 'JavaScript', done: true},
    {id: 139608, skill: 'Node.js/Express', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }