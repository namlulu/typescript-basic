{
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailStatus = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailStatus;

  function printLoginState(req: ResourceLoadState) {
    if (req.state === 'loading') {
      console.log(req.state);
    } else if (req.state === 'success') {
      console.log(req.response.body);
    } else {
      console.log(req.reason);
    }
  }

  printLoginState({ state: 'loading' });
  printLoginState({
    state: 'success',
    response: {
      body: 'loaded',
    },
  });
  printLoginState({ state: 'fail', reason: 'no network' });
}
