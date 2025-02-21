import React from 'react';

export const Person = ({ person }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age != null && <p className="Person__age">I am {person.age}</p>}

      {() => {
        if (!person.isMarried) {
          <p className="Person__partner">I am not married</p>;
        }

        if (person.sex === 'm') {
          <p className="Person__partner">{person.partnerName} is my wife</p>;
        } else {
          <p className="Person__partner">{person.partnerName} is my husband</p>;
        }
      }}
    </section>
  );
};
