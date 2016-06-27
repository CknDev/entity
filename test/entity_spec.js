const { create, update } = require('../entity')

describe('entity', () => {
  it('should update a entity prop', () => {
    const data = {
       id: 1,
       name: 'thing',
       location: {
         room: 'chambre'
       },
       category: 'verre'
     }
    const subject = update('name', 'gobelet', data)

    expect(subject.name).to.equal('gobelet')
  })
  it('should update an entity prop deeply', () => {
    const data = {
       id: 1,
       name: 'thing',
       location: {
         room: 'chambre'
       },
       category: 'verre'
     }
    const subject = update('location.room', 'cuisine', data)

    expect(subject.location.room).to.equal('cuisine')
  })
})
