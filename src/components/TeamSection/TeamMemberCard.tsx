import { motion } from "framer-motion";
import { TeamMember } from "../../lib/team";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
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
      className="h-full"
    >
      <Card className="overflow-hidden card-hover flex flex-col h-full">
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center shrink-0">
          <Avatar className="h-full w-full rounded-none">
            <AvatarImage
              src={member.imageUrl}
              alt={`Professional headshot of ${member.name}`}
              className="object-cover"
            />
            <AvatarFallback className="rounded-none bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </AvatarFallback>
          </Avatar>
        </div>
        <CardContent className="p-6 flex flex-col flex-grow">
          <h4 className="text-xl font-semibold text-gray-900 mb-1">
            {member.name}
          </h4>
          <p className="text-green-700 font-medium mb-3">
            {member.position}
          </p>
          <div className="flex space-x-3 mt-auto">
            {member.linkedinUrl && (
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <i className="fab fa-linkedin text-gray-400 hover:text-blue-700"></i>
                </Button>
              </a>
            )}
            {member.emailUrl && (
              <a href={`mailto:${member.emailUrl}`}>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <i className="fas fa-envelope text-gray-400 hover:text-blue-700"></i>
                </Button>
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TeamMemberCard;
