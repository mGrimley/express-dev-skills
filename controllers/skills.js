const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'Express Skills'
    })
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Express Skills - Show'
    })
}

function newSkill(req, res) {
    res.render('skills/new', {
        title: 'Add Skill'
    })
}

function create(req, res) {
    // console.log(req.body)
    Skill.create(req.body)
    res.redirect('/skills')
}