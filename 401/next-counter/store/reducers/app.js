let initialState = {
  title: 'React Counter App',
};

console.log({initialState});

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'GET':
      return payload;
    default:
      return state;
  }
};
