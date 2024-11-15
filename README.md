# 사용법

1. .env.local.sample 파일명을 .env.local 로 변경하세요.
2. .env.local 안에 필요한 내용을 supabase 에 들어가서 확인해서 채워넣으세요.
3. 강의노트에 있는 그대로 posts 테이블을 만들어야만 합니다.
4. posts 테이블 만든 후 posts.user_id를 auth.users.id에 연결해 보세요.
5. Supabase Authentication 가서 유저를 한명 추가하고 그 유저의 id 를 .env.local에 채워 넣습니다.
6. Storage 서비스의 bucket명은 avatar 로 설정되어 있습니다. 다른 bucket명 사용 시 src/api/storage.js 에서 uploadFile 함수의 코드 변경도 합시다.
