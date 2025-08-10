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
    <div className="h-full">
      <Card className="overflow-hidden card-hover flex flex-col h-full transition-all duration-300 hover:shadow-lg">
        <div className="w-full h-48 sm:h-56 lg:h-64 bg-gray-200 flex items-center justify-center shrink-0">
          <Avatar className="h-full w-full rounded-none">
            <AvatarImage
              src={member.imageUrl}
              alt={`Professional headshot of ${member.name}`}
              className="object-cover"
            />
            <AvatarFallback className="rounded-none bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm sm:text-base">No Image</span>
            </AvatarFallback>
          </Avatar>
        </div>
        <CardContent className="p-4 sm:p-6 flex flex-col flex-grow">
          <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 line-clamp-2">
            {member.name}
          </h4>
          <p className="text-sm sm:text-base text-green-700 font-medium mb-3 sm:mb-4 line-clamp-2">
            {member.position}
          </p>
          <div className="flex space-x-2 sm:space-x-3 mt-auto">
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
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamMemberCard;
