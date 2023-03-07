"use strict";

const persons = Symbol("persons");

const personList = 
{
    //Array of Persons - symbol with a key of "[persons]"
    [persons]: [],
    
    load()
    {
        this[persons] = storage.retrieve();
        return this;
    },

    save()
    {
        storage.store(this[persons]);
        return this;
    },

    sort()
    {
        this[persons].sort((person1, person2) =>
        {
            if (person1.dob < person2.dob)
            {
                return -1;
            }

            else if (person1.dob > person2.dob)
            {
                return 1;
            }

            else
            {
                return 0;
            }

        });

        return this;
    },

    add(person)
    {
        this[persons].push(person);
        return this;
    },

    delete(i)
    {
        this.sort();
        this[persons].splice(i, 1);

        return this;
    },

    clear()
    {
        storage.clear();
        return this;
    },

    *[Symbol.iterator]()
    {
        for(let person of this [persons])
        {
            yield person;
        }
    }

};