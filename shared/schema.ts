import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content"), // Detailed content for modal view
  date: timestamp("date").notNull(),
  location: text("location").notNull(),
  imageUrl: text("image_url"),
  category: text("category").default("general"),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const teamMembers = pgTable("team_members", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  position: text("position").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url"),
  linkedinUrl: text("linkedin_url"),
  emailUrl: text("email_url"),
  isActive: boolean("is_active").default(true).notNull(),
});

export const mediaItems = pgTable("media_items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  mediaType: text("media_type").notNull(), // 'image' or 'video'
  mediaUrl: text("media_url").notNull(),
  thumbnailUrl: text("thumbnail_url"),
  category: text("category").notNull(), // 'events', 'activities', 'achievements', etc.
  tags: text("tags").array(),
  uploadedBy: text("uploaded_by").notNull(),
  isPublished: boolean("is_published").default(false).notNull(),
  sortOrder: integer("sort_order").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const volunteers = pgTable("volunteers", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone"),
  studentId: text("student_id"),
  department: text("department"),
  year: text("year"),
  interests: text("interests").array(),
  skills: text("skills").array(),
  availability: text("availability"),
  experience: text("experience"),
  isActive: boolean("is_active").default(true).notNull(),
  joinedAt: timestamp("joined_at").defaultNow().notNull(),
});

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  status: text("status").notNull().default("active"), // 'active', 'unsubscribed', 'pending'
  preferences: text("preferences").array(), // ['events', 'activities', 'general']
  subscribedAt: timestamp("subscribed_at").defaultNow().notNull(),
  unsubscribedAt: timestamp("unsubscribed_at"),
});

export const newsletters = pgTable("newsletters", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(), // 'events', 'activities', 'general', 'achievements'
  featuredImage: text("featured_image"),
  isPublished: boolean("is_published").default(false).notNull(),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const professors = pgTable("professors", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(), // 'faculty_incharge' or 'programme_officer'
  department: text("department"),
  email: text("email"),
  isActive: boolean("is_active").default(true).notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  firstName: true,
  lastName: true,
  email: true,
  subject: true,
  message: true,
});

export const insertEventSchema = createInsertSchema(events).pick({
  title: true,
  description: true,
  content: true,
  date: true,
  location: true,
  imageUrl: true,
  category: true,
});

export const insertTeamMemberSchema = createInsertSchema(teamMembers).pick({
  name: true,
  position: true,
  description: true,
  imageUrl: true,
  linkedinUrl: true,
  emailUrl: true,
});

export const insertMediaItemSchema = createInsertSchema(mediaItems).pick({
  title: true,
  description: true,
  mediaType: true,
  mediaUrl: true,
  thumbnailUrl: true,
  category: true,
  tags: true,
  uploadedBy: true,
  isPublished: true,
  sortOrder: true,
});

export const insertVolunteerSchema = createInsertSchema(volunteers).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  studentId: true,
  department: true,
  year: true,
  interests: true,
  skills: true,
  availability: true,
  experience: true,
});

export const insertNewsletterSubscriberSchema = createInsertSchema(newsletterSubscribers).pick({
  email: true,
  firstName: true,
  lastName: true,
  preferences: true,
});

export const insertNewsletterSchema = createInsertSchema(newsletters).pick({
  title: true,
  description: true,
  content: true,
  category: true,
  featuredImage: true,
  isPublished: true,
  publishedAt: true,
});

export const insertProfessorSchema = createInsertSchema(professors).pick({
  name: true,
  role: true,
  department: true,
  email: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;

export type InsertTeamMember = z.infer<typeof insertTeamMemberSchema>;
export type TeamMember = typeof teamMembers.$inferSelect;

export type InsertMediaItem = z.infer<typeof insertMediaItemSchema>;
export type MediaItem = typeof mediaItems.$inferSelect;

export type InsertVolunteer = z.infer<typeof insertVolunteerSchema>;
export type Volunteer = typeof volunteers.$inferSelect;

export type InsertNewsletterSubscriber = z.infer<typeof insertNewsletterSubscriberSchema>;
export type NewsletterSubscriber = typeof newsletterSubscribers.$inferSelect;

export type InsertProfessor = z.infer<typeof insertProfessorSchema>;
export type Professor = typeof professors.$inferSelect;

export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
export type Newsletter = typeof newsletters.$inferSelect;
