{
  // Error Handling: try -  catch - finally

  function readFile(fileName: string): string {
    if (fileName === 'not exist!') {
      throw new Error(`${fileName} not found`);
    }
    return 'file contents';
  }

  function closeFile(fileName: string) {}

  const fileName = 'not exist!';

  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(error);
  } finally {
    console.log('!!');
    closeFile(fileName);
  }
}
