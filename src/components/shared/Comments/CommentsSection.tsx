import Comment from "./Comment";

const f = [{user: {profilePic: "https://avatars.githubusercontent.com/u/22263436?v=4", profileUrl: "", username: "username 21"}, id: '54564', comment: "at TypeScriptParserMixin.parseStatementContent (/workspaces/developers-portfolios-frontend/node_modules/@babel/parser/lib/index.js:12688:23)"}, {user: {profilePic: "https://avatars.githubusercontent.com/u/22263436?v=4", profileUrl: "", username: "username 21"}, id: '54564', comment: "at TypeScriptParserMixin.parseStatementContent (/workspaces/developers-portfolios-frontend/node_modules/@babel/parser/lib/index.js:12688:23)"}, {user: {profilePic: "https://avatars.githubusercontent.com/u/22263436?v=4", profileUrl: "", username: "username 21"}, id: '54564', comment: "at TypeScriptParserMixin.parseStatementContent (/workspaces/developers-portfolios-frontend/node_modules/@babel/parser/lib/index.js:12688:23)"}]


function CommentsSection() {


	return (
        <section>
            <span className="text-xl font-bold">Comment section</span>
		<div className="flex flex-col">

            {f.map(c => <Comment key={c.id} data={c}/>)}

            </div>
        </section>
	);
}

export default CommentsSection;
