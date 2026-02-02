import './Footer.css';
import DropDown from './DropDown.jsx'

export default function Footer(){
  return(
    <footer>
      <ol>
        <li> 1. Available for Qualified Purchasers only. Qualified Purchasers purchasing an eligible Mac/iPad (“Eligible Product”) with eligible AirPods/accessory (“Promotion Product”) from a Qualifying Location through September 30, 2025 will receive Promotion Savings (up to $199, not to exceed the price of the Promotion Product). Customers will be charged for all items in their cart, including the Promotion Product. Only one Promotion Product per Eligible Product per Qualified Purchaser. Offer subject to availability. While supplies last. Additional restrictions apply. View full offer terms <a href="#" className="link">here</a>.</li>
        <br/>
        <li> 2. Hearing Aid and Hearing Test: The Hearing Aid feature has received FDA authorization. The Hearing Test and Hearing Aid features are supported on AirPods Pro 2 with the latest firmware paired with a compatible iPhone or iPad with iOS 18 or iPadOS 18 and later and are intended for people 18 years old or older. The Hearing Aid feature is also supported on a compatible Mac with macOS Sequoia and later. It is intended for people with perceived mild to moderate hearing loss. </li>
        <br/>
        <li>3. Hearing Protection: The Hearing Protection feature works with AirPods Pro 2 with the latest firmware when paired with a compatible iPhone, iPad, or Mac with iOS 18, iPadOS 18, or macOS Sequoia and later. Feature is only available in the U.S. and Canada. See <a href="#" className="link"> support.apple.com/120850</a> for total attenuation and more information. The Hearing Protection feature is not suitable for protection against extremely loud impulse sounds, such as gunfire, fireworks, or jackhammers, or against sustained sounds louder than 110 dBA.</li>
        <br/>
        <li>4. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in‑store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade-in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.</li>
        <br/>
      </ol>

      <p>
        To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
        <br/><br/>
        Apple Payments Services LLC, a subsidiary of Apple Inc., is a service provider of Goldman Sachs Bank USA for Apple Card and Savings accounts. Neither Apple Inc. nor Apple Payments Services LLC is a bank.
        <br/><br/>
        If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
        <br/><br/>
        Learn more about how Apple Card applications are evaluated at <a href="#" class="link">support.apple.com/kb/HT209218 </a>.
        <br/><br/>
        Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to the same supported language, as part of an iOS 18, iPadOS 18, and macOS Sequoia software update. Supported languages include English, French, German, Italian, Portuguese (Brazil), Spanish, Japanese, Korean, and Chinese (Simplified). More languages are coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages.
        <br/><br/>
        A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV+.
        <br/><br/>
        Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.
        <br/><br/>
      </p>

      {/*  */}
      <DropDown />

      <ul>
        <li>More ways to shop : <a href="#" className="blue-url">Find an Apple Store </a>or <a href="#" className="blue-url">other retailer </a>near you. Or call <a href="#" className="blue-url">1-800-MY-APPLE </a>(1-800-692-7753). </li><br/>
        <li className="bold">United States</li><br/>
        <li>Copyright &copy; 2025 Apple Inc. All rights reserved.</li> 
        <li className="bold">Privacy Policy | Terms of Use | Sales and Refunds | legal | Site Map</li><br/>
      </ul> 
    </footer>
  )
}