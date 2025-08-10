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
    <div className="text-center">
      <div className="mb-4">
        <Avatar className="h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56 mx-auto border-4 border-white shadow-lg">
          <AvatarImage
            src={member.imageUrl}
            alt={`Professional headshot of ${member.name}`}
            className="object-cover"
          />
          <AvatarFallback className="bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-sm sm:text-base">No Image</span>
          </AvatarFallback>
        </Avatar>
      </div>
      <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1">
        {member.name}
      </h4>
      <p className="text-sm sm:text-base text-gray-600 font-medium mb-3">
        {member.position}
      </p>
      <div className="flex justify-center space-x-2 sm:space-x-3">
        {member.linkedinUrl && (
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8">
              <i className="fab fa-linkedin text-gray-400 hover:text-blue-700 transition-colors text-sm sm:text-base"></i>
            </Button>
          </a>
        )}
        {member.emailUrl && (
          <a 
            href={`mailto:${member.emailUrl}`}
            className="transition-transform hover:scale-110"
          >
            <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8">
              <i className="fas fa-envelope text-gray-400 hover:text-blue-700 transition-colors text-sm sm:text-base"></i>
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
