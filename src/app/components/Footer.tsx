import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components"
import { person, social } from '@/app/resources'

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Flex
            as="footer"
            position="relative"
            fillWidth padding="8"
            justifyContent="center">
            <Flex
                fillWidth maxWidth="m" paddingY="8" paddingX="16"
                justifyContent="space-between" alignItems="center">
                <Text
                    variant="body-default-s"
                    onBackground="neutral-strong">
                    <Text
                        style={{paddingRight: '0.5rem'}}
                        onBackground="neutral-weak">
                        © {currentYear} 
                    </Text>
                    <Text onBackground="neutral-weak">
                        {/* Usage of this template requires attribution. Please don't remove the link to Once UI. */}
                        / <SmartLink style={{marginLeft: '-0.125rem'}} href="https://once-ui.com/"> Once UI</SmartLink>
                        / <SmartLink href="https://nextjs.org/">Next.js</SmartLink>
                    </Text>
                    <Text paddingX="4">
                        / {person.name}
                    </Text>
                </Text>
                <Flex
                    gap="16">
                    {social.map((item) => (
                        item.link && (
                            <IconButton
                                key={item.name}
                                href={item.link}
                                icon={item.icon}
                                tooltip={item.name}
                                size="s"
                                variant="ghost"/>
                        )
                    ))}
                </Flex>
            </Flex>
        </Flex>
    )
}