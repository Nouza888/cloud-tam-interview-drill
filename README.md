# Cloud TAM 面接ドリル

このフォルダのファイルを同じ階層でGitHubリポジトリへ配置します。
index.htmlは質問・回答・CSS・JavaScriptを内包し、単体で開いて復習できます。
スマホのホーム画面への追加とオフライン動作には、manifest・sw.js・各アイコンも必要です。

## GitHub Pages
1. このフォルダ内のファイルをリポジトリのルートへアップロードします。
2. Settings → Pages → Deploy from a branch → main / (root) を選びます。
3. 公開URLを確認し、スマホで開きます。
4. iPhone/iPadはSafariの共有 → ホーム画面に追加。Androidはブラウザのメニューから追加します。

相対パスを使用しているため、リポジトリ名を変えても利用できます。
初回オンライン読込と保存完了後にオフラインで使えます。
ブラウザによってインストールの表示・手順が異なります。

## 教材と学習記録
教材はExcelの保存時点の内容です。質問IDを維持して再生成すれば、学習記録を引き継げます。
自己評価・練習メモ・文字サイズは端末とブラウザごとに保存し、自動同期しません。
設定画面のJSON書き出し・読み込みで端末間移行ができます。同じIDの記録は読み込み内容で上書きします。
回答が未作成の質問は、未回答と明示しています。
新しいバージョンを配置した後は、サイトの更新案内から読み込めます。

教材には個人の実務経験や社内運用に関する記述があります。公開前に公開可能な内容か確認してください。
このファイル一式はローカルで準備したもので、GitHubへのアップロード・公開はまだ実施していません。

参考：
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/start_url
- https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
