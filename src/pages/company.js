import CompanySections from "../components/company/company-sections/company-sections";
import Image1 from "../assets/about/desktop/image-about-hero.jpg";
import Image2 from "../assets/about/desktop/image-real-deal.jpg";
import Image3 from "../assets/about/desktop/image-world-class-talent.jpg";

const company = () => {
  return (
    <>
      <CompanySections
        heading="About Us"
        desc1="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences."
        image={Image1}
      />

      <CompanySections
        className="section2"
        heading="World-class talent"
        desc1="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms."
        desc2="Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
        image={Image3}
      />

      <CompanySections
        className="section3"
        heading="The real deal"
        desc1="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
        desc2="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
        image={Image2}
      />
    </>
  );
};

export default company;
