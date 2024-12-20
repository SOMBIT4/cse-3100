import i1 from '../assets/images/1.jpeg';
import i2 from '../assets/images/2.jpeg';
import i3 from '../assets/images/3.jpeg';
import i4 from '../assets/images/4.jpeg';


const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Jane Doe',
      role: 'Founder & CEO',
      image: i1,
    },
    {
      name: 'John Smith',
      role: 'Veterinarian',
      image: i2,
    },
    {
      name: 'Emily Johnson',
      role: 'Adoption Coordinator',
      image: i3,
    },
    {
      name: 'Michael Brown',
      role: 'Volunteer Coordinator',
      image: i4,
    },
  ];

  return (
    <div>
      <h2>Our Mission</h2>
      <p style={{ fontSize: '1.25rem' }}>
        Our mission is to create a loving and safe environment for every cat in need. We are dedicated to rescuing abandoned, abused, and homeless cats, providing them with the care and compassion they deserve. Our goal is to find each cat a forever home where they can thrive and bring joy to their new families.
      </p>
      <div style={{ marginBottom: '5rem' }}></div>
      <h2>Our History</h2>
      <p style={{ fontSize: '1.25rem' }}>
        Founded in 2010, Purrfect Adoption began with a simple yet profound mission: to provide a safe haven for cats in need and to connect them with loving families. What started as a small group of passionate animal lovers has grown into a thriving community dedicated to feline welfare.
      </p>
      <div style={{ marginBottom: '5rem' }}></div>
      <h2>Our Team</h2>
      <div className="row" style={{ marginTop: '20px' }}>
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-3 col-sm-6 text-center mb-4">
            <img
              src={member.image}
              alt={member.name}
              style={{ borderRadius: '50%', width: '150px', height: '150px' }}
            />
            <h5 style={{ marginTop: '15px' }}>{member.name}</h5>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
