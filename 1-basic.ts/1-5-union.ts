{
  // // Union Type
  // type Direction = 'left' | 'right' | 'up' | 'Down';
  // function move(direction: Direction) {
  //   console.log(direction);
  // }
  // move('left');
  // type TileSize = 8 | 16 | 32;
  // const title: TileSize = 16;
  // // function: login -> success, fail
  // type SuccessState = {
  //   response: {
  //     body: string;
  //   };
  // };
  // type FailState = {
  //   reason: string;
  // };
  // type LoginState = SuccessState | FailState;
  // function login(): LoginState {
  //   return {
  //     response: {
  //       body: 'logged in!',
  //     },
  //   };
  // }
  // printLoginState(state)
  // success -> ? body
  // fail -> ? reason
  // function printLoginState(state: LoginState): void {
  //   if ('response' in state) {
  //     console.log('?' + state.response);
  //   } else {
  //     console.log('?' + state.reason);
  //   }
  // }
}
