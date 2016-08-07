/// <reference path="recurserator.d.ts"/>

import RecursionBuilder from 'recurserator';

const data = {
  value1: 10,
  aList: [{
    listKey: 'HI!'
  }],
  nested: {
    anotherNested: {
    }
  }
};

const builder = RecursionBuilder.create(data);

for (let [key, value, path, parent] of builder) {
  (<string>key);
  (<number>value);
  (<string>path);
  (<Object>parent);
}

// Yield array value but don't access them

const truth = () => true;
const notArray = (item: any) => !Array.isArray(item);

for (let [key, value, path, parent] of builder.yield(truth).traverse(notArray)) {
  (<string>key);
  (<number>value);
  (<string>path);
  (<Object>parent);
}

// Only yield objects

const isObject = (item: any) => typeof item === 'object';

for (let [key, value, path, parent] of builder.yield(isObject)) {
  (<string>key);
  (<number>value);
  (<string>path);
  (<Object>parent);
}
