const DonateButton = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="  rounded text-xl font-bold text-white uppercase ">
        <a
          className="text-white hover:text-white w-full bg-green-600 hover:bg-green-700 px-10 py-4 rounded"
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=luismorcillo@gmail.com&item_name=Donation%20to%20Tripware&no_note=0&cn=&currency_code=EUR&bn=PP-DonationsBF:btn_donateCC_LG.gif:NonHosted"
          target="_blank"
        >
          Donate
        </a>
      </div>
    </div>
  );
};

export default DonateButton;
