function asycnLearn() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await asycnLearn();
    console.log(result);
  }
  
  asyncCall();
  
  