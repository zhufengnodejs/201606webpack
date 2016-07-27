var str = '/api/users';
console.log(str.replace(/\/api\/(.+)/,'$1\.json'));