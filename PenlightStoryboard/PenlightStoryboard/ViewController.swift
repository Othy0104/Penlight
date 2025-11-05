//
//  ViewController.swift
//  PenlightStoryboard
//
//  Created by 大竹啓之 on 2025/11/05.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    // SegmentedControlが操作されたときに呼ばれるアクション
    @IBAction func segmentChanged(_ sender: UISegmentedControl) {
        let selectedIndex = sender.selectedSegmentIndex
        var nextVC: UIViewController?

        switch selectedIndex {
        case 1:
            nextVC = storyboard?.instantiateViewController(withIdentifier: "ManualViewController")
        case 2:
            nextVC = storyboard?.instantiateViewController(withIdentifier: "ConnectionViewController")
        case 3:
            nextVC = storyboard?.instantiateViewController(withIdentifier: "MarkViewController")
        default:
            break
        }

        if let vc = nextVC {
            // Showで画面遷移（NavigationControllerを利用している場合）
            navigationController?.pushViewController(vc, animated: true)
        }

        // ホームに戻る場合はインデックスを0に戻す
        sender.selectedSegmentIndex = 0
    }

}
