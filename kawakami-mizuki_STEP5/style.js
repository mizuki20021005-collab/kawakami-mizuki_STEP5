
// テキストボックスを取得
const textInput = document.getElementById("textInput");

// 表示ボタンを取得
const displayButton = document.getElementById("displayButton");

// 表示エリアを取得
const displayArea = document.getElementById("displayArea");

// 表示ボタンをクリックしたときの処理
displayButton.addEventListener("click", function () {

    // テキストボックスの入力内容を取得
    const inputText = textInput.value;

    // 空欄の場合
    if (inputText === "") {
        alert("入力値が空です。");
        return;
    }

    // 表示エリアに入力した文字を反映
    displayArea.textContent = inputText;

    // ハイライトを切り替える
    displayArea.classList.toggle("highlight");

});


// 設問2：背景色の変更

const backgroundButton = document.getElementById("backgroundButton");

const colors = [
    "lightblue",
    "lightgreen",
    "lightcoral"
];

let colorIndex = 0;

backgroundButton.addEventListener("click", function () {
    // 背景色を変更
    document.body.style.backgroundColor = colors[colorIndex];

    // 次の色へ
    colorIndex++;

    // 最後までいったら最初に戻る
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
});

// 設問4：テーブルへの追加

const addButton = document.getElementById("addButton");
const tableBody = document.getElementById("tableBody");
const rowCount = document.getElementById("rowCount");

let dataList = [];

// 追加ボタン
addButton.addEventListener("click", function () {

    const text = textInput.value;

    // 空欄の場合は追加しない
    if (text === "") {
        alert("入力値が空です。");
        return;
    }

    // データを追加
    dataList.push(text);

    // 設問6：最大3件まで表示, 4件以上になったら古いデータを削除
    if (dataList.length > 3) {
        dataList.shift();
    }

    // テーブルを更新
    updateTable();

});

// テーブルの更新処理

function updateTable() {

    // テーブルを一度空にする
    tableBody.innerHTML = "";

    // データをテーブルに表示
    dataList.forEach(function (data, index) {

        // 行を作成
        const tr = document.createElement("tr");

        // 内容のセル
        const tdContent = document.createElement("td");
        tdContent.textContent = data;

        // 操作のセル
        const tdOperation = document.createElement("td");

        // 削除ボタン
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "削除";
        deleteButton.className = "deleteButton";

        // 削除ボタンの処理
        deleteButton.addEventListener("click", function () {

            // 該当データを削除
            dataList.splice(index, 1);

            // テーブルを更新
            updateTable();

        });

        // セルに削除ボタンを追加
        tdOperation.appendChild(deleteButton);

        // 行にセルを追加
        tr.appendChild(tdContent);
        tr.appendChild(tdOperation);

        // テーブルに行を追加
        tableBody.appendChild(tr);

    });

    // 設問4・5：行数の表示

    rowCount.textContent = "現在の行数: " + dataList.length + " 件";

    // 設問4・5：表示ボタンの切り替え
    if (dataList.length >= 3) {

        // 3件以上なら表示ボタンを非表示
        displayButton.style.display = "none";

    } else {

        // 3件未満なら表示ボタンを表示
        displayButton.style.display = "inline-block";

    }

}

// 設問7：ループ表示

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
