import UIKit

class ManualViewController: UIViewController {

    // 🔵 12色ぶんのボタンをまとめて接続する（Outlet Collection）
    // ここに「赤〜白」まで 12 個すべてのボタンをドラッグ＆ドロップでつなぐ
    @IBOutlet var colorButtons: [UIButton]!

    // スライダー
    @IBOutlet weak var blinkSlider: UISlider!
    @IBOutlet weak var speedSlider: UISlider!

    override func viewDidLoad() {
        super.viewDidLoad()

        // ボタンに 0〜11 のタグを振っておく（Storyboard でタグを振っていても OK）
        for (index, button) in colorButtons.enumerated() {
            button.tag = index
        }
    }

    // 色タップ（12色どれを押してもこの IBAction が呼ばれる）
    @IBAction func colorButtonTapped(_ sender: UIButton) {
        let index = sender.tag   // 0〜11
        print("色が押されました: \(index)")
        // ここで index に応じて 12 色の RGB を決めて BLE 送信…みたいに拡張できる
    }

    @IBAction func blinkChanged(_ sender: UISlider) {
        print("点滅 → \(sender.value)")
    }

    @IBAction func speedChanged(_ sender: UISlider) {
        print("速度 → \(sender.value)")
    }

    @IBAction func registerTapped(_ sender: UIButton) {
        print("登録ボタンが押されました")
    }
}
