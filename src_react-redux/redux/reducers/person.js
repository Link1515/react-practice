import { ADD_PERSION } from '../constant';

const initState = [{ id: '001', name: 'Link' }];

export default function personReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSION:
      // 此處不要直接操作陣列(如: push)
      return [data, ...preState];
    default:
      return preState;
  }
}
