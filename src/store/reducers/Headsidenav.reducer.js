const initialstate = {
  status: false,
};

export const sidenav_reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "SIDE_NAV":
      return {
        status: !state.status,
      };
  }
  return state;
};
