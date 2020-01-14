
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('cities').del()
      .then(function () {
        // Inserts seed entries
        return knex('cities').insert([
          { city: 'London', country: 'UK', activities: ['Watch Premier League football', 'Watch cricket at Lords', 'Watch tennis at Wimbledon'], places: ['London Eye', 'Big Ben', 'Westminster Abbey']},
          { city: 'Paris', country: 'France', activities: ['Le Ballon de Paris', 'Retro 2CV Car', 'River cruise'], places: ['Eiffel Tower', 'Arc de Triomphe', 'Champs Elysees']},
          { city: 'New York', country: 'USA', activities: ['Visit Central Park', 'Visit Statue of Liberty', 'Indoor Skydiving'], places: ['Empire State Building', 'Times Square', 'Charging Bull']}
        ]);
      });
  };
  