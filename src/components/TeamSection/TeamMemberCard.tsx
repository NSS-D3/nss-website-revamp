import { motion } from "framer-motion";
import { TeamMember } from "../../lib/team";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

type TeamMemberCardProps = {
  member: TeamMember;
  index: number;
};

const TeamMemberCard = ({ member, index }: TeamMemberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden card-hover">
        {member.imageUrl && (
          <img
            src={member.imageUrl}
            alt={`Professional headshot of ${member.name}`}
            className="w-full h-64 object-cover"
          />
        )}
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold text-gray-900 mb-1">
            {member.name}
          </h4>
          <p className="text-community-green font-medium mb-3">
            {member.position}
          </p>
          <div className="flex space-x-3">
            {member.linkedinUrl && (
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <i className="fab fa-linkedin text-gray-400 hover:text-bits-blue"></i>
              </Button>
            )}
            {member.emailUrl && (
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <i className="fas fa-envelope text-gray-400 hover:text-bits-blue"></i>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TeamMemberCard;
