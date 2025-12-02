import UIKit

class ConnectionViewController: UIViewController {

    @IBOutlet weak var PairingButton: UIButton!
    @IBOutlet weak var registerAllButton: UIButton!
    override func viewDidLoad() {
        super.viewDidLoad()
        print("画面ロード完了")
    }
    
    @IBAction func ButtonTapped(_ sender: Any) {
        print("Yes")
    }
}
