//
//  ConnectionViewController.swift
//  PaletteSync
//
//  Created by 大竹啓之 on 2025/11/12.
//

import UIKit
import CoreBluetooth

class ConnectionViewController: UIViewController, CBCentralManagerDelegate, CBPeripheralDelegate {

    // MARK: - BLE管理変数
    var centralManager: CBCentralManager!
    var discoveredPeripheral: CBPeripheral?
    var writeCharacteristic: CBCharacteristic?

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .systemBackground
        print("アプリ起動: BLE初期化中…")
        centralManager = CBCentralManager(delegate: self, queue: nil)
    }

    // MARK: - Bluetooth状態の確認
    func centralManagerDidUpdateState(_ central: CBCentralManager) {
        switch central.state {
        case .poweredOn:
            print("Bluetooth ON → スキャン開始")
            centralManager.scanForPeripherals(withServices: nil, options: nil)
        default:
            print("Bluetoothが無効です")
        }
    }

    // MARK: - デバイス検出
    func centralManager(_ central: CBCentralManager,
                        didDiscover peripheral: CBPeripheral,
                        advertisementData: [String : Any],
                        rssi RSSI: NSNumber) {

        if let name = peripheral.name {
            print("発見: \(name)")
        }

        // ESP32を見つけたら接続
        if let name = peripheral.name, name == "NeoPixelBLE1" {
            print("接続開始: \(name)")
            discoveredPeripheral = peripheral
            discoveredPeripheral?.delegate = self
            centralManager.stopScan()
            centralManager.connect(peripheral, options: nil)
        }
    }

    // MARK: - 接続成功
    func centralManager(_ central: CBCentralManager, didConnect peripheral: CBPeripheral) {
        print("接続成功! サービス探索開始")
        peripheral.discoverServices([CBUUID(string: "6E400001-B5A3-F393-E0A9-E50E24DCCA9E")])
    }

    // MARK: - サービス発見
    func peripheral(_ peripheral: CBPeripheral, didDiscoverServices error: Error?) {
        for service in peripheral.services ?? [] {
            print("サービス発見: \(service.uuid)")
            peripheral.discoverCharacteristics(
                [CBUUID(string: "6E400003-B5A3-F393-E0A9-E50E24DCCA9E")],
                for: service
            )
        }
    }

    // MARK: - キャラクタリスティック発見
    func peripheral(_ peripheral: CBPeripheral,
                    didDiscoverCharacteristicsFor service: CBService,
                    error: Error?) {
        for c in service.characteristics ?? [] {
            print("キャラクタリスティック: \(c.uuid)")
            if c.uuid.uuidString == "6E400003-B5A3-F393-E0A9-E50E24DCCA9E" {
                writeCharacteristic = c
                print("書き込みCharacteristic取得完了！")
            }
        }
    }

    // MARK: - 切断時処理
    func centralManager(_ central: CBCentralManager,
                        didDisconnectPeripheral peripheral: CBPeripheral,
                        error: Error?) {
        print("デバイスが切断されました")
    }
}
